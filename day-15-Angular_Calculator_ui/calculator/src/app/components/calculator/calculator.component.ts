import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  currentInput: string = '';   // Input to be displayed
  result: string = '';         // Calculation result

  // Appends a number or decimal point to the current input
  appendNumber(number: string) {
    this.currentInput += number;
  }

  // Appends an operator to the current input
  appendOperator(operator: string) {
    // Only add operator if there is an existing number
    if (this.currentInput && !this.isLastCharacterOperator()) {
      this.currentInput += operator;
    }
  }

  // Checks if the last character in the current input is an operator
  isLastCharacterOperator(): boolean {
    const lastChar = this.currentInput.slice(-1);
    return ['+', '-', '*', '/'].includes(lastChar);
  }

  // Clears the current input and result
  clear() {
    this.currentInput = '';
    this.result = '';
  }

  // Deletes the last character in the current input
  delete() {
    this.currentInput = this.currentInput.slice(0, -1);
  }

  // Performs the calculation
  calculate() {
    try {
      // Use eval to compute result, converting string to a JavaScript expression
      this.result = eval(this.currentInput).toString();
    } catch (error) {
      this.result = 'Error';   // Display error if calculation fails
    }
  }
}