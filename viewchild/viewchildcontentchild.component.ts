/*
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
    Component,
    NgModule,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    SimpleChanges,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ViewChildren,
    ContentChild,
    ContentChildren,
    ElementRef,
    QueryList
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

class Message {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'Message',
  template: `
<div class="card card-block">
  <h4 class="card-title">
    <ng-content select=".setup"></ng-content>
  </h4>
  <p class="card-text"
     [hidden]="data.hide">
    <ng-content select=".punchline"></ng-content>
  </p>
  <a class="btn btn-primary"
     (click)="data.toggle()">Tell Me
  </a>
</div>
`
})
class MessageComponent {

  @Input('Message') data: Message;
}

@Component({
  selector: 'Message-list',
  template: `
<h4 #header>View Messages</h4>
<Message *ngFor="let j of Messages" [Message]="j">
  <span class="setup">{{ j.setup }}?</span>
  <h1 class="punchline">{{ j.punchline }}</h1>
</Message>
<h4>Content Messages</h4>
<ng-content></ng-content>
`
})
class MessageListComponent implements OnInit,
    AfterContentInit,
    AfterViewInit {

  Messages: Message[] = [
    new Message("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
    new Message("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
  ];

  @ViewChild(MessageComponent) MessageViewChild: MessageComponent;
  @ViewChildren(MessageComponent) MessageViewChildren: QueryList<MessageComponent>;
  @ViewChild("header") headerEl: ElementRef;
  @ContentChild(MessageComponent) MessageContentChild: MessageComponent;

  constructor() {
    console.log(`new - MessageViewChild is ${this.MessageViewChild}`);
    console.log(`new - MessageContentChild is ${this.MessageContentChild}`);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit - MessageContentChild is ${this.MessageContentChild}`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - MessageViewChild is ${this.MessageViewChild}`);

    let Messages: MessageComponent[] = this.MessageViewChildren.toArray();
    console.log(Messages);

    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    this.headerEl.nativeElement.textContent = "Best Message Machine";
  }
}


@Component({
  selector: 'app',
  template: `
<Message-list>
  <Message [Message]="Message">
    <span class="setup">{{ Message.setup }}?</span>
    <h1 class="punchline">{{ Message.punchline }}</h1>
  </Message>
</Message-list>
`
})
class AppComponent {
  Message: Message = new Message("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’");
}

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
*/