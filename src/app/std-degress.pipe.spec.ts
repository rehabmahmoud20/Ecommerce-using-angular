import { Pipe } from '@angular/core';
import { StdDegressPipe } from './std-degress.pipe';

fdescribe('StdDegressPipe', () => {
  it('create an instance', () => {
    const pipe = new StdDegressPipe();
    expect(pipe).toBeTruthy();
  });
  it('test if the degree is more than 100 ',()=>{
    const pipe = new StdDegressPipe();
    const grade = pipe.transform(110);
    expect(grade).toBe('');
  });
  it('test if the degree is less than 0',()=>{
    const pipe = new StdDegressPipe();
    const grade = pipe.transform(-1);
    expect(grade).toBe('');
  })
  it('test if the degree is less than 50',()=>{
    const pipe = new StdDegressPipe();
    const grade = pipe.transform(40);
    expect(grade).toBe('D');
  })
  it('test if the degree is between 60 and 50',()=>{
    const pipe = new StdDegressPipe();
    const grade = pipe.transform(55);
    expect(grade).toBe('C');
  })
  it('test if the degree is between 60 and 75',()=>{
    const pipe = new StdDegressPipe();
    const grade = pipe.transform(65);
    expect(grade).toBe('B');
  })
  it('test if the degree is between 100 and 75',()=>{
    const pipe = new StdDegressPipe();
    const grade = pipe.transform(90);
    expect(grade).toBe('A');
  })
});
