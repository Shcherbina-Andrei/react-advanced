import { fireEvent, screen } from '@testing-library/react';
import ComponentRender from 'shared/lib/tests/componentRender/componentRender';
import { SideBar } from 'widgets/SideBar/ui/SideBar';

describe('Sidebar', () => {
  test('test render', () => {
    ComponentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    ComponentRender(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
