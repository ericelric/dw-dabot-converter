#DaBot Converter

This application converts Windows server paths to OSX server paths.

conversion process:
  - converts backslash (\\) into slash (/)
  - replaces Windows volume prefix ("C:\" or "\\\smb...") with OSX prefix "/Volumes/webdav..." or "/Volumes/public/" (depending on the source)
