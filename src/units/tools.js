export function chComponent(self , component ,parameter) {
  self.$parent.parameter = parameter;
  self.$parent.showComponent(eval( 'self.$parent.components.'+component ));
}
