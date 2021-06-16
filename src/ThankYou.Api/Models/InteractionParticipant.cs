using System;

namespace ThankYou.Api.Models
{
    public class InteractionParticipant
    {
        public Guid InteractionParticipantId { get; private set; }
        public Guid InteractionId { get; private set; }
        public Guid ParticipantId { get; private set; }
        public Interaction Interaction { get; private set; }
        public Participant Participant { get; private set; }

        public InteractionParticipant(Guid participantId)
        {
            ParticipantId = participantId;
        }

        private InteractionParticipant()
        {

        }
    }
}
