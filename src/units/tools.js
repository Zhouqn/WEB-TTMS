export function chComponent(self , component ,parameter) {
  if("parameter" in self.$parent) {
    self.$parent.parameter = parameter;
  }
  self.$parent.showComponent(eval( 'self.$parent.components.'+component ));
}
