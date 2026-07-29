test_settings = {
    'theme' : 'dark',
    'volume' : 'high',
    'datasaver' : 'on',
    'wifi' : 'on',
    'torch' : 'off'
}
#add_setting function 
def add_setting(dictionary, key_value):
    key = key_value[0].lower()
    value = key_value[1].lower()
    if key in dictionary:
        return f"Setting '{key}' already exists! Cannot add a new setting with this name."
    else:
        dictionary.update({key:value})
        return f"Setting '{key}' added with value '{value}' successfully!"

print(add_setting(test_settings,("brightness","low")))

#update_setting function 
def update_setting(dictionary,key_value):
    key = key_value[0].lower()
    value = key_value[1].lower()
    if key in dictionary:
        dictionary[key] = value
        return f"Setting '{key}' updated to '{value}' successfully!"
    else:
        return f"Setting '{key}' does not exist! Cannot update a non-existing setting."

print(update_setting(test_settings,("Theme","light")))

#delete_setting function 
def delete_setting(dictionary,key):   
    key = key.lower()
    if key in dictionary:
        dictionary.pop(key)
        return f"Setting '{key}' deleted successfully!"
    else:
        return "Setting not found!"
print(delete_setting(test_settings,"datasaver"))
print(delete_setting(test_settings,"data"))

#view_setting function 
def view_settings(dictionary):
    if dictionary == {}:
         return "No settings available."
    else:
        output = "Current User Settings:\n"
        for key, value in dictionary.items():
            clean_key = key.capitalize()
            output += f"{clean_key}: {value}\n"
    return output

print(view_settings(test_settings))
