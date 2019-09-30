export function DEC(state){
    console.log('DEC');
    console.log('state -> ', state);
    var resultState = {
      cnt: state.cnt - 1
    };
    return resultState;
}