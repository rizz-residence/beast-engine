# Changelog

## v1.1.0

- Added credits to changelog.
- Improved documentation.
- Added `be.assets.Assets`.
  - A helper module for asset caching/retrieval, with async support.
  - Contributions:
    - [`FixedData`](https://github.com/FixedData) - Helped with asset caching code.
- Added `be.assets.AssetLists`.
  - A simple helper module for managing asset lists to use with `be.assets.Assets`.
- Changes to `be.menu.Menu`
  - Debounce now has a default value of `0.1`.
  - Fixed mouse-based menu items not having hold functionality.
  - `FlxBasic` usage is now `FlxObject`.
- Changes to `be.menu.MenuItem`
  - `FlxBasic` usage is now `FlxObject`.
- Changes to `be.shader.shaders.NoiseShader`
  - Fixed the `size` uniform having the inverse of intended behavior in the shader.
- Changes to `be.song.SongHelper`
  - Fixed close callbacks running twice when the song ends normally.
  - Fixed close callbacks running twice when `PlayState` closes as a substate.
  - Events now reinstate themselves when moving backwards in the song (if you need to do that).
  - Small stability improvements.

## v1.0.0

- Initial release.
  - Contributions:
    - [`Ralytro`](https://github.com/Raltyro) - Shader coords fix.
