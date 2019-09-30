export function INC(state){
  console.log('INC');
  var resultState = {
    cnt: state.cnt + 1
  };
  return resultState;
}