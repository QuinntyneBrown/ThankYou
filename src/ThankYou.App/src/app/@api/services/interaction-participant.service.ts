import { Injectable, Inject } from '@angular/core';
import { baseUrl } from '@core/constants';
import { HttpClient } from '@angular/common/http';
import { InteractionParticipant } from '@api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPagableService } from '@core/ipagable-service';
import { EntityPage } from '@core/entity-page';

@Injectable({
  providedIn: 'root'
})
export class InteractionParticipantService implements IPagableService<InteractionParticipant> {

  uniqueIdentifierName: string = "interactionParticipantId";

  constructor(
    @Inject(baseUrl) private readonly _baseUrl: string,
    private readonly _client: HttpClient
  ) { }

  getPage(options: { pageIndex: number; pageSize: number; }): Observable<EntityPage<InteractionParticipant>> {
    return this._client.get<EntityPage<InteractionParticipant>>(`${this._baseUrl}api/interactionParticipant/page/${options.pageSize}/${options.pageIndex}`)
  }

  public get(): Observable<InteractionParticipant[]> {
    return this._client.get<{ interactionParticipants: InteractionParticipant[] }>(`${this._baseUrl}api/interactionParticipant`)
      .pipe(
        map(x => x.interactionParticipants)
      );
  }

  public getById(options: { interactionParticipantId: string }): Observable<InteractionParticipant> {
    return this._client.get<{ interactionParticipant: InteractionParticipant }>(`${this._baseUrl}api/interactionParticipant/${options.interactionParticipantId}`)
      .pipe(
        map(x => x.interactionParticipant)
      );
  }

  public remove(options: { interactionParticipant: InteractionParticipant }): Observable<void> {
    return this._client.delete<void>(`${this._baseUrl}api/interactionParticipant/${options.interactionParticipant.interactionParticipantId}`);
  }

  public create(options: { interactionParticipant: InteractionParticipant }): Observable<{ interactionParticipant: InteractionParticipant }> {
    return this._client.post<{ interactionParticipant: InteractionParticipant }>(`${this._baseUrl}api/interactionParticipant`, { interactionParticipant: options.interactionParticipant });
  }
  
  public update(options: { interactionParticipant: InteractionParticipant }): Observable<{ interactionParticipant: InteractionParticipant }> {
    return this._client.put<{ interactionParticipant: InteractionParticipant }>(`${this._baseUrl}api/interactionParticipant`, { interactionParticipant: options.interactionParticipant });
  }
}
