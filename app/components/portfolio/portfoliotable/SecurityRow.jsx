import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import classNames from 'classnames/bind';
import SymbolTextField from './SymbolTextField';
import AllocationTextField from './AllocationTextField';
import PriceCell from './PriceCell';
import UnitsTextField from './UnitsTextField';
import RemoveSecurityButton from './RemoveSecurityButton';
import styles from '../../../css/components/portfolio/portfolio-table/security-row';

const cx = classNames.bind( styles );

const SecurityRow = ({security, securitySelect, removeSecurity, securityTextFieldChange}) => {
  return (<TableRow
                    className={ cx( 'table-row' ) }>
            <TableRowColumn
                            className={ cx( 'table-row-column' ) }>
              <SymbolTextField
                               index={ security.index }
                               value={ security.symbol.value }
                               setOnce={ security.symbol.setOnce }
                               errorText={ securitySelect.symbolSelect.errorText }
                               onChange={ securityTextFieldChange } />
            </TableRowColumn>
            <TableRowColumn
                            className={ cx( 'table-row-column' ) }>
              <AllocationTextField
                                   index={ security.index }
                                   value={ security.allocation.value }
                                   setOnce={ security.allocation.setOnce }
                                   errorText={ securitySelect.allocationSelect.errorText }
                                   onChange={ securityTextFieldChange } />
            </TableRowColumn>
            <TableRowColumn
                            className={ cx( 'table-row-column' ) }>
              <PriceCell
                         index={ security.index }
                         value={ security.price.value }
                         setOnce={ security.price.setOnce }
                         fetchStatus={ security.price.fetchStatus }
                         errorText={ securitySelect.priceSelect.errorText }
                         onChange={ securityTextFieldChange } />
            </TableRowColumn>
            <TableRowColumn
                            className={ cx( 'table-row-column' ) }>
              <UnitsTextField
                              index={ security.index }
                              value={ security.units.value }
                              setOnce={ security.units.setOnce }
                              errorText={ securitySelect.unitsSelect.errorText }
                              onChange={ securityTextFieldChange } />
            </TableRowColumn>
            <TableRowColumn
                            className={ cx( 'table-row-column-last' ) }>
              <RemoveSecurityButton
                                    index={ security.index }
                                    removeSecurity={ removeSecurity } />
            </TableRowColumn>
          </TableRow>);
};

SecurityRow.propTypes = {
  security: PropTypes.object.isRequired,
  securitySelect: PropTypes.object.isRequired,
  removeSecurity: PropTypes.func.isRequired,
  securityTextFieldChange: PropTypes.func.isRequired
};

export default SecurityRow;
