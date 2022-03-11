using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CrudO.Sample.Migrations
{
    public partial class clean : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Master");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Master");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "Master");

            migrationBuilder.DropColumn(
                name: "DeletedDate",
                table: "Master");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Master");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Master");

            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                table: "Master");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Master");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Detail");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Detail");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "Detail");

            migrationBuilder.DropColumn(
                name: "DeletedDate",
                table: "Detail");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Detail");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Detail");

            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                table: "Detail");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Detail");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "Master",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Master",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "Master",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedDate",
                table: "Master",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Master",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Master",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ModifiedBy",
                table: "Master",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Master",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "Detail",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Detail",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "Detail",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedDate",
                table: "Detail",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Detail",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Detail",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ModifiedBy",
                table: "Detail",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Detail",
                type: "datetime2",
                nullable: true);
        }
    }
}
