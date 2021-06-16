using System;
using System.Collections.Generic;

namespace ThankYou.Api.Features
{
    public class InteractionDto
    {
        public Guid InteractionId { get; set; }
        public List<ParticipantDto> Participants { get; set; } = new();
        public DateTime Date { get; set; } = DateTime.UtcNow;
        public string Description { get; set; }
    }
}
