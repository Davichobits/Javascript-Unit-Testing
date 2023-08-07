import { describe, expect, it, vi } from "vitest";
import { generateReportData } from "./data";

// vi.mock('./util/logger', ()=>{
//   log: vi.fn()
// })

describe('generateReportData', ()=>{
  it('should execute logFn if provided', ()=>{
    const log = vi.fn()
    generateReportData(log)
    expect(log).toBeCalled()
  });
});