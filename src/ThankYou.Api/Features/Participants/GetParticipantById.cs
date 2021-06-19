using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;
using ThankYou.Api.Core;
using ThankYou.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ThankYou.Api.Features
{
    public class GetParticipantById
    {
        public class Request : IRequest<Response>
        {
            public Guid ParticipantId { get; set; }
        }

        public class Response : ResponseBase
        {
            public ParticipantDto Participant { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IThankYouDbContext _context;

            public Handler(IThankYouDbContext context)
                => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                return new()
                {
                    Participant = (await _context.Participants.SingleOrDefaultAsync(x => x.ParticipantId == request.ParticipantId)).ToDto()
                };
            }

        }
    }
}
