using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System;
using ThankYou.Api.Models;
using ThankYou.Api.Core;
using ThankYou.Api.Interfaces;

namespace ThankYou.Api.Features
{
    public class RemoveParticipant
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
                var participant = await _context.Participants.SingleAsync(x => x.ParticipantId == request.ParticipantId);

                _context.Participants.Remove(participant);

                await _context.SaveChangesAsync(cancellationToken);

                return new Response()
                {
                    Participant = participant.ToDto()
                };
            }

        }
    }
}
