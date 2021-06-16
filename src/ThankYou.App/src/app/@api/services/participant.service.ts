import { Injectable, Inject } from '@angular/core';
import { baseUrl } from '@core/constants';
import { HttpClient } from '@angular/common/http';
import { Participant } from '@api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPagableService } from '@core/ipagable-service';
import { EntityPage } from '@core/entity-page';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService implements IPagableService<Participant> {

  uniqueIdentifierName: string = "participantId";

  constructor(
    @Inject(baseUrl) private readonly _baseUrl: string,
    private readonly _client: HttpClient
  ) { }

  getPage(options: { pageIndex: number; pageSize: number; }): Observable<EntityPage<Participant>> {
    return this._client.get<EntityPage<Participant>>(`${this._baseUrl}api/participant/page/${options.pageSize}/${options.pageIndex}`)
  }

  public get(): Observable<Participant[]> {
    return this._client.get<{ participants: Participant[] }>(`${this._baseUrl}api/participant`)
      .pipe(
        map(x => x.participants)
      );
  }

  public getById(options: { participantId: string }): Observable<Participant> {
    return this._client.get<{ participant: Participant }>(`${this._baseUrl}api/participant/${options.participantId}`)
      .pipe(
        map(x => x.participant)
      );
  }

  public remove(options: { participant: Participant }): Observable<void> {
    return this._client.delete<void>(`${this._baseUrl}api/participant/${options.participant.participantId}`);
  }

  public create(options: { participant: Participant }): Observable<{ participant: Participant }> {
    return this._client.post<{ participant: Participant }>(`${this._baseUrl}api/participant`, { participant: options.participant });
  }
  
  public update(options: { participant: Participant }): Observable<{ participant: Participant }> {
    return this._client.put<{ participant: Participant }>(`${this._baseUrl}api/participant`, { participant: options.participant });
  }
}
