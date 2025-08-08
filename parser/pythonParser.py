import re

def parse_python(code):
    pattern = r'def\s+(\w+)\s*\((.*?)\)\s*(?:->\s*(\w+))?:'
    matches = re.findall(pattern, code)
    result = []
    for name, params, returns in matches:
        param_list = [p.strip().split('=')[0] for p in params.split(',') if p.strip()]
        result.append({
            'name': name,
            'params': param_list,
            'returns': returns or 'unknown',
            'description': 'Auto-generated from source code.'
        })
    return result
