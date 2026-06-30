import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FeatureFlagService } from '../feature-flag/feature-flag.service';

@Component({
    selector: 'cat-image',
    standalone: true,
    imports: [NgIf],
    template: `
        <img *ngIf="isFeatureEnabled" alt="cat" src="https://www.purina.com/sites/default/files/media/image/AmericanBobtail_body_6.jpg">
    `
})
export class CatImageComponent {
    private readonly featureFlagService = inject(FeatureFlagService);

    public get isFeatureEnabled() {
        return this.featureFlagService.isEnabled('productsPageFlag');
    }
}
