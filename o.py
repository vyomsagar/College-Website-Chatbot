import os

def print_directory_contents(directory, indent=0):
    # Define a set of folder names to exclude
    exclude_folders = {'build', 'node_modules', '.vscode'}
    
    # Get the absolute path of the directory
    abs_directory = os.path.abspath(directory)
    
    # Iterate over each item in the directory
    for item in os.listdir(abs_directory):
        # Create the full path of the item
        full_path = os.path.join(abs_directory, item)
        
        # Check if the item is a directory and if it should be excluded
        if os.path.isdir(full_path) and item in exclude_folders:
            continue
        
        # Print the item with indentation
        print('  ' * indent + f"- {item}")
        
        # If the item is a directory, call this function recursively
        if os.path.isdir(full_path):
            print_directory_contents(full_path, indent + 1)

# Your specific directory path
directory_path = 'C:/Users/vinay/Videos/chatbot-frontend'

# Print the sitemap
print("Sitemap of Directory:")
print_directory_contents(directory_path)
