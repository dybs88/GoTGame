using Microsoft.EntityFrameworkCore.Migrations;

namespace GotGame.RestServer.Migrations
{
    public partial class UpdateDB3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "House",
                table: "Players");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "House",
                table: "Players",
                nullable: true);
        }
    }
}
