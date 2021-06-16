using System;

namespace ThankYou.Api.Models
{
    public class Participant
    {
        public Guid ParticipantId { get; private set; }
        public string Name { get; private set; }

        public Participant(string name)
        {
            Name = name;
        }

        private Participant()
        {

        }
    }
}
