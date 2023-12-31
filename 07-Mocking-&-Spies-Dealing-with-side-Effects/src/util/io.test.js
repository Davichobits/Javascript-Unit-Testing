import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';

vi.mock('fs')
vi.mock('path', ()=>{
  return {
    default: {
      join: (...args) => {
        return args[2]
      }
    }
  }
})

it('should return the writeFile method', ()=>{
  const testData = 'Test';
  const testFilename = 'test.txt'
  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  writeData(testData, testFilename)
  expect(fs.writeFile).toBeCalled();
  // expect(fs.writeFile).toBeCalledWith(testFilename, testData);
})

it('should return the writeFile method', ()=>{
  const testData = 'Test';
  const testFilename = 'test.txt'
  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  writeData(testData, testFilename)
  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
})