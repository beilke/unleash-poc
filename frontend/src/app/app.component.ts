import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatImageComponent } from './cat-image/cat-image.component';
import { FeatureFlagService } from './feature-flag/feature-flag.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CatImageComponent, RouterOutlet],
    template: `
        <h1>Unleash POC</h1>
        <p>This cat picture is feature-flagged!</p>
        <cat-image />
        <router-outlet />
    `
})
export class AppComponent {
    private readonly featureFlagService = inject(FeatureFlagService);

    public ngOnInit(): void {
        this.featureFlagService.start();
    }
}
