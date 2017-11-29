import React, {Component} from 'react'
import { 
  GridList,
  GridTile,
  GridTilePrimary,
  GridTilePrimaryContent,
  GridTileSecondary,
  GridTileTitle } from 'rmwc'
  
class Grid extends Component {
  render() {
    return (
      <GridList tileAspect={'1x1'} >
        {Array(10).fill().map((val, i) => (
          <GridTile key={i}>
            <GridTilePrimary>
              <GridTilePrimaryContent>
                <img src="https://material-components-web.appspot.com/images/1-1.jpg" alt="test" />
              </GridTilePrimaryContent>
            </GridTilePrimary>
            <GridTileSecondary>
              <GridTileTitle>Tile {i + 1}</GridTileTitle>
            </GridTileSecondary>
          </GridTile>
        ))}
      </GridList>
    )
  }
}

export default Grid
