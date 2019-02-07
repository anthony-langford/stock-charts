using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace stock_charts
{
    public partial class stocksContext : DbContext
    {
        public stocksContext()
        {
        }

        public stocksContext(DbContextOptions<stocksContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Price> Price { get; set; }
        public virtual DbSet<Stock> Stock { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=stocks;Pooling=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.1-servicing-10028");

            modelBuilder.Entity<Price>(entity =>
            {
                entity.ToTable("price");

                entity.Property(e => e.PriceId).HasColumnName("price_id");

                entity.Property(e => e.CreatedOn)
                    .HasColumnName("created_on")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Currency)
                    .IsRequired()
                    .HasColumnName("currency")
                    .HasMaxLength(50);

                entity.Property(e => e.Price1)
                    .HasColumnName("price")
                    .HasColumnType("numeric(12,2)");

                entity.Property(e => e.StockId).HasColumnName("stock_id");

                entity.HasOne(d => d.Stock)
                    .WithMany(p => p.Price)
                    .HasForeignKey(d => d.StockId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("price_stock_id_fkey");
            });

            modelBuilder.Entity<Stock>(entity =>
            {
                entity.ToTable("stock");

                entity.HasIndex(e => e.Description)
                    .HasName("stock_description_key")
                    .IsUnique();

                entity.HasIndex(e => e.Name)
                    .HasName("stock_name_key")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnName("code")
                    .HasMaxLength(50);

                entity.Property(e => e.CreatedOn)
                    .HasColumnName("created_on")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("description")
                    .HasMaxLength(355);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(50);
            });
        }
    }
}
