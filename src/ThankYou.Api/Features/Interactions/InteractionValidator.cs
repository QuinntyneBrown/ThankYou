using FluentValidation;

namespace ThankYou.Api.Features
{
    public class InteractionValidator: AbstractValidator<InteractionDto> {
        public InteractionValidator()
        {
            RuleFor(x => x.Date).NotNull();
            RuleFor(x => x.Description).NotEmpty().NotNull();
            RuleFor(x => x.Participants).NotEmpty();
            RuleForEach(x => x.Participants).SetValidator(new ParticipantValidator());
        }
    }
}
