import { describe, expect, it } from "vitest";
import { fetchingData } from "./review";

describe('fetchingData', ()=>{
  it("should be a function", ()=>{
    expect(typeof fetchingData).toBe('function');
  })
})