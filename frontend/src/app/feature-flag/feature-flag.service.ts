import { Injectable } from '@angular/core';
import { IMutableContext, UnleashClient } from 'unleash-proxy-client';

@Injectable({
    providedIn: 'root'
})
export class FeatureFlagService {
    private readonly unleash = new UnleashClient({
        url: 'https://unleash-proxy.bracher-beilke.synology.me/proxy',
        clientKey: `my_secret_for_client`,
        appName: `angular-unleash-poc`,
        environment: `development`,
    });

    public start(): void {
        this.unleash.start();
    }

    public stop(): void {
        this.unleash.stop();
    }

    public updateContext(contextObj: IMutableContext): void {
        this.unleash.updateContext(contextObj);
    }

    public isEnabled(feature: string): boolean {
        return this.unleash.isEnabled(feature);
    }
}