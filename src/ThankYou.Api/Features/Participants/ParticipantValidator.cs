using FluentValidation;

namespace ThankYou.Api.Features
{
    public class ParticipantValidator: AbstractValidator<ParticipantDto> {
        public ParticipantValidator()
        {
            RuleFor(x => x.Name).NotNull().NotEmpty();
        }
    }
}
