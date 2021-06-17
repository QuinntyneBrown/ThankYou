using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ThankYou.Api.Interfaces;
using ThankYou.Api.Extensions;

namespace ThankYou.Api.Features
{
    public class SearchParticipants
    {
        public class Request : IRequest<Response> {
            public string PropertyName { get; set; }
            public string SearchTerm { get; set; }

        }

        public class Response
        {
            public List<ParticipantDto> Participants { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IThankYouDbContext _context;

            public Handler(IThankYouDbContext context){
                _context = context;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {
			    return new () { 
                    Participants = _context.Participants
                    .Search(request.PropertyName, request.SearchTerm)
                    .Select(x => x.ToDto()).ToList()
                };
            }
        }
    }
}
