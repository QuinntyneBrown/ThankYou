// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ThankYou.Api.Data;

namespace ThankYou.Api.Migrations
{
    [DbContext(typeof(ThankYouDbContext))]
    [Migration("20210616110226_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ThankYou.Api.Models.Interaction", b =>
                {
                    b.Property<Guid>("InteractionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("InteractionId");

                    b.ToTable("Interactions");
                });

            modelBuilder.Entity("ThankYou.Api.Models.InteractionParticipant", b =>
                {
                    b.Property<Guid>("InteractionParticipantId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("InteractionId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ParticipantId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("InteractionParticipantId");

                    b.HasIndex("InteractionId");

                    b.HasIndex("ParticipantId");

                    b.ToTable("InteractionParticipants");
                });

            modelBuilder.Entity("ThankYou.Api.Models.Participant", b =>
                {
                    b.Property<Guid>("ParticipantId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ParticipantId");

                    b.ToTable("Participants");
                });

            modelBuilder.Entity("ThankYou.Api.Models.InteractionParticipant", b =>
                {
                    b.HasOne("ThankYou.Api.Models.Interaction", "Interaction")
                        .WithMany("InteractionParticipants")
                        .HasForeignKey("InteractionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ThankYou.Api.Models.Participant", "Participant")
                        .WithMany()
                        .HasForeignKey("ParticipantId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Interaction");

                    b.Navigation("Participant");
                });

            modelBuilder.Entity("ThankYou.Api.Models.Interaction", b =>
                {
                    b.Navigation("InteractionParticipants");
                });
#pragma warning restore 612, 618
        }
    }
}
