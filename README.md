# cv

> The main website showing my CV to the world

If you have any questions, feel free to contact me at me@josephkim.online

## Files not include via .gitignore

### .ftpdeploy

**Location** root directory of project (outside of src)

**Format**
open ftp.XXX
USERNAME
PASSWORD
ascii
cd public_html
prompt
put dist/index.html
cd static
cd css
mdelete *
mput dist/static/css/*
cd ../js
mdelete *
mput dist/static/js/*
close
bye
