# Changelog

## v1.1.1

- Improved and fixed documentation.
- Changes to `be.neocam.Neocam`
  - Gave `setBumpPattern` a default pattern to use if none is provided.
  - Small stability improvements.

## v1.1.0

- Added credits to changelog.
- Improved documentation.
- Added `be.assets.Assets`.
  - A helper module for asset caching/retrieval, with async support.
  - Contributions:
    - [`FixedData`](https://github.com/FixedData) - Helped with asset caching code.
- Added `be.assets.AssetLists`.
  - A simple helper module for managing asset lists to use with `be.assets.Assets`.
- Added `be.threads.Threads`.
  - Multi-threading helper module.
- Changes to `be.menu.Menu`
  - `FlxBasic` usage is now `FlxObject`.
  - Debounce now has a default value of `0.1`.
  - Fixed mouse-based menu items not having hold functionality.
  - Renamed `MenuData` to `MenuParams` for clarity.
  - Small stability improvements.
- Changes to `be.menu.MenuItem`
  - `FlxBasic` usage is now `FlxObject`.
  - `onRelease` and `onHold` now have a parameter for how long the button has been held.
  - `onDirectionPress` and `onDirectionHold` and `onDirectionRelease` now have a parameter for how long each direction has been held.
  - Renamed `MenuItemData` to `MenuItemParams` for clarity.
- Changes to `be.save.Save`
  - Added auto-save functionality via `autoSaveInterval` in entry data.
  - Added `prettySave` option to entry data as a fallback.
  - Added failsafe for trying to save while I/O is busy.
  - Small stability improvements.
- Changes to `be.shader.shaders.NoiseShader`
  - Fixed the `size` uniform having the inverse of intended behavior in the shader.
- Changes to `be.song.SongHelper`
  - Fixed close callbacks running twice when the song ends normally.
  - Fixed close callbacks running twice when `PlayState` closes as a substate.
  - Events now reinstate themselves when moving backwards in the song (if you need to do that).
  - Small stability improvements.
- Changes to `be.util.GenUtil`
  - Added `objectClone`.
  - `objectMerge` and `objectPaths` are now iterative instead of recursive to avoid stack overflows.
  - `objectMerge` and `objectPaths` now have a `deep` parameter.
  - Small stability improvements.

## v1.0.0

- Initial release.
  - Contributions:
    - [`Ralytro`](https://github.com/Raltyro) - Shader coords fix.
