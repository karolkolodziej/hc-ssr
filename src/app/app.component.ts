import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import Highcharts from "highcharts/es-modules/masters/highcharts.src";
import { HighchartsChartModule } from "highcharts-angular";
import { isPlatformBrowser, isPlatformServer } from "@angular/common";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, HighchartsChartModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	public Highcharts: typeof Highcharts = Highcharts;
	public chartOptions: Highcharts.Options = {
		series: [
			{
				data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				type: "line",
			},
		],
	};
    public isBrowser: boolean;
    public isServer: boolean;

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
      this.isBrowser = isPlatformBrowser(platformId);
      this.isServer = isPlatformServer(platformId);

    }
}
