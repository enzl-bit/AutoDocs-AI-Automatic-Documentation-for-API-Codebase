import sys
import json
from parser.pythonParser import parse_python

with open(sys.argv[1], 'r') as f:
    code = f.read()

result = parse_python(code)
print(json.dumps(result, indent=2))
