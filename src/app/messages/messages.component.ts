import { Component, Input, OnInit } from '@angular/core';
import { Message } from './messages.interface';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  @Input() messages: Message[] = [
    {
      text: "Hello",
      author: "Arturo"
    },
    {
      text: "Hi, how are you?",
      author: "user"
    },
    {
      text: "Great thanks",
      author: "Arturo"
    },
    {
      text: "I need help with an Angular project, could you please help me?",
      author: "Arturo"
    },
    {
      text: "Sure, how about you explain to me a bit better what you need to do?",
      author: "user"
    },
    {
      text: "Sure, so basically If writing these examples in an editor that supports TypeScript, you will find that the editor will use the available type information to document itself. For the previous example, as soon as you open the {} object literal for manager, the editor will expect a name property of type string:",
      author: "Arturo"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  sendMessageIfEnterIsPressed($event: KeyboardEvent, input: HTMLElement) {
    if ($event.key === 'Enter' && input.innerText.trim()) {
      $event.preventDefault();
      this.sendMessage(input);
    }
  }

  sendMessage(input: HTMLElement): void {
    const text = input.innerText.trim();
    if (text) {
      this.messages.push({
        author: 'user',
        text
      });
      input.innerHTML = "";
    }
  }

}
