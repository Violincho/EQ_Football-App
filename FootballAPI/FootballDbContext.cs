using FootballAPI.Models;
using Microsoft.EntityFrameworkCore;

public class FootballDbContext : DbContext
{
    public FootballDbContext(DbContextOptions<FootballDbContext> options) : base(options)
    {
    }
    public DbSet<FootballPlayer> FootballPlayers { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<FootballPlayer>().HasData(
            new FootballPlayer
            {
                Id = 1,
                Name = "Cristiano Ronaldo",
                CurrentTeam = "Al Nassr",
                Age = 40,
                Height = 1.92f,
                Position = "Forward"
            },
            new FootballPlayer
            {
                Id = 2,
                Name = "Erling Haaland",
                CurrentTeam = "Manchester City",
                Age = 24,
                Height = 1.94f,
                Position = "Striker"
            },
            new FootballPlayer
            {
                Id = 3,
                Name = "Kevin De Bruyne",
                CurrentTeam = "Manchester City",
                Age = 33,
                Height = 1.81f,
                Position = "Midfielder"
            },
            new FootballPlayer
            {
                Id = 4,
                Name = "Virgil van Dijk",
                CurrentTeam = "Liverpool",
                Age = 32,
                Height = 1.93f,
                Position = "Defender"
            },
            new FootballPlayer
            {
                Id = 5,
                Name = "Thibaut Courtois",
                CurrentTeam = "Real Madrid",
                Age = 33,
                Height = 2.00f,
                Position = "Goalkeeper"
            }
        );
    }

}
