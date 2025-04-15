export interface CleanOptions {
    removeNull?: boolean;
    removeUndefined?: boolean;
    removeEmptyString?: boolean;
    removeEmptyArray?: boolean;
    removeEmptyObject?: boolean;
  }
  
  export function cleanJSON(obj: any, options: CleanOptions = {}): any {
    const {
      removeNull = true,
      removeUndefined = true,
      removeEmptyString = true,
      removeEmptyArray = false,
      removeEmptyObject = false,
    } = options;
  
    if (Array.isArray(obj)) {
      return obj
        .map(item => cleanJSON(item, options))
        .filter(item => {
          if (removeEmptyArray && Array.isArray(item) && item.length === 0) return false;
          if (removeEmptyObject && isEmptyObject(item)) return false;
          if (item === null && removeNull) return false;
          if (item === undefined && removeUndefined) return false;
          if (item === '' && removeEmptyString) return false;
          return true;
        });
    }
  
    if (typeof obj === 'object' && obj !== null) {
      const result: Record<string, any> = {};
  
      for (const [key, value] of Object.entries(obj)) {
        const cleanedValue = cleanJSON(value, options);
  
        if (cleanedValue === null && removeNull) continue;
        if (cleanedValue === undefined && removeUndefined) continue;
        if (cleanedValue === '' && removeEmptyString) continue;
        if (Array.isArray(cleanedValue) && cleanedValue.length === 0 && removeEmptyArray) continue;
        if (isEmptyObject(cleanedValue) && removeEmptyObject) continue;
  
        result[key] = cleanedValue;
      }
  
      return result;
    }
  
    return obj;
  }
  
  function isEmptyObject(value: any): boolean {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && Object.keys(value).length === 0;
  }
  