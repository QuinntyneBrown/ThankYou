using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using ThankYou.Api.Core;
using ThankYou.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ThankYou.Api.Features
{
    public class GetParticipants
    {
        public class Request: IRequest<Response> { }

        public class Response: ResponseBase
        {
            public List<ParticipantDto> Participants { get; set; }
        }

        public class Handler: IRequestHandler<Request, Response>
        {
            private readonly IThankYouDbContext _context;
        
            public Handler(IThankYouDbContext context)
                => _context = context;
        
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                return new () {
                    Participants = await _context.Participants.Select(x => x.ToDto()).ToListAsync()
                };
            }
            
        }
    }
}
