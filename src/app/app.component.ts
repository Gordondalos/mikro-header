import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LanguageSelectService } from '@iiko/language-select';
import { NewsService } from '@iiko/news';
import { RangeSelectorService } from '@iiko/range-selector';
import { RestoService } from '@iiko/select-resto';
import {
  AppCategory,
  ConfigInterface,
  ConfigService,
  IIKOCommonApiService,
  UserDTO,
} from '@iiko/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'resto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  user?: UserDTO;

  version?: string;

  showAccountSettings = false;

  categories: AppCategory[] = [];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly apiService: IIKOCommonApiService,
    private readonly languageSelectService: LanguageSelectService,
    private readonly restoService: RestoService,
    private readonly rangeSelectorService: RangeSelectorService,
    private readonly newsService: NewsService,
    private readonly configService: ConfigService,
  ) {}

  ngOnInit(): void {
    this.initRangeSelector();

    this.restoService.init();

    this.newsService.updateCount$().subscribe();

    this.initConfig();

    this.initUserPermissions();
  }

  private initRangeSelector(): void {
    this.rangeSelectorService.init('W');
    this.rangeSelectorService.setRangeSelectorPeriods(['D', 'W', 'M', 'Y', 'P']);
  }

  private initUserPermissions(): void {
    this.apiService.getUserPermissions().subscribe((permissions: string[]) => {
      this.showAccountSettings = permissions.includes('USER_CABINET_PROMISED_PAYMENT_APPLY')
      this.cdr.markForCheck();
    });
  }

  private initConfig(): void {
    this.configService.init$().subscribe((config: ConfigInterface) => {
      this.version = config.auth.appversion;
      this.user = config.auth.user ?? undefined;

      this.languageSelectService.init();
      this.languageSelectService.setupBaseHref(environment.baseHref);
      this.cdr.markForCheck();
    });
  }
}
