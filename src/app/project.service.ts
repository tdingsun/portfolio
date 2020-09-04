import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Project } from './project'; 
import { PROJECTS } from './project-list';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = 'api/project-list.json';
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
      .pipe(
        catchError(this.handleError)
      );

  }

  getProject(root: string): Observable<Project | undefined> {
    return this.getProjects()
    .pipe(
      map((projects: Project[]) => projects.find(p => p.imgRoot === root))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never>{
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
