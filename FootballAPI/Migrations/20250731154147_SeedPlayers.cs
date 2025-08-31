using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FootballAPI.Migrations
{
    /// <inheritdoc />
    public partial class SeedPlayers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FootballPlayers",
                columns: new[] { "Id", "Age", "CurrentTeam", "Height", "Name", "Position" },
                values: new object[,]
                {
                    { 1, 40, "Al Nassr", 1.92f, "Cristiano Ronaldo", "Forward" },
                    { 2, 24, "Manchester City", 1.94f, "Erling Haaland", "Striker" },
                    { 3, 33, "Manchester City", 1.81f, "Kevin De Bruyne", "Midfielder" },
                    { 4, 32, "Liverpool", 1.93f, "Virgil van Dijk", "Defender" },
                    { 5, 33, "Real Madrid", 2f, "Thibaut Courtois", "Goalkeeper" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FootballPlayers",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "FootballPlayers",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "FootballPlayers",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "FootballPlayers",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "FootballPlayers",
                keyColumn: "Id",
                keyValue: 5);
        }
    }
}
