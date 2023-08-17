
import { FunctionComponent, ReactElement, ReactNode} from 'react';
type SwitchComponentTypes = {
  active: string;
  children: JSX.Element[];
}

export type SwitchComponentChildrenType = {
  name: string;
}
const SwitchComponents: FunctionComponent<SwitchComponentTypes> = ({ active, children }) => {
  // Switch all children and return the "active" one
  return (
  <> 
    {children.filter((child: JSX.Element) => child.props.name == active)}
  </>
  );
}
export {SwitchComponents}