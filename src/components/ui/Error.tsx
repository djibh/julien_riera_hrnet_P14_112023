/* Error.tsx - Component
 *
 * This component is currently used to show the 'No data' when the API cannot be reached. Could be used to add navigation items too.
 *  
 */
import styled from "styled-components";
import FolderOffIcon from '@mui/icons-material/FolderOff';
import theme from "../../design/theme";

export function Error() {
  return (
        <ErrorStyled>
          <FolderOffIcon className='no-result__icon' />
          <div>Aucune donnée disponible</div>
        </ErrorStyled>
  )
}

const ErrorStyled = styled.div`
      text-align: center;
      color: ${theme.colors.verdigris};
      font-size: 1.6rem;
      
      .no-result__icon {
        font-size: 100px;
      }
`;