import { describe, expect, it } from "vitest";
import { validateNotEmpty } from "./validation.js";
import { ValidationError } from './errors.js';

describe('validateNotEmpty', ()=>{
  it('should be a function', ()=>{
    expect(typeof validateNotEmpty).toBe('function')
  })
  it('should throw and error if function doesnt have parameters', ()=>{
    expect(()=>validateNotEmpty()).toThrow()
  })
  it('should throw an error if an empty string is provided as a value', ()=>{
    const testInput = '';
    expect(()=>validateNotEmpty(testInput)).toThrow()
  })
  it('should throw an error if an empty string is provided as a value', ()=>{
    const testInput = '  ';
    expect(()=>validateNotEmpty(testInput)).toThrow()
  })
  it('should throw an error if an empty string is provided as a value', ()=>{
    const testInput = '  ';
    const testErrorMessage = 'Hijole'
    expect(()=>validateNotEmpty(testInput, testErrorMessage)).toThrow(testErrorMessage)
  })
  // it('should call the ValidationError constructor if no text is passed', ()=>{
  //   validateNotEmpty()
  //   expect(ValidationError).toBeCalled()
  // })
})