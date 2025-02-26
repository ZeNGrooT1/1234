export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      announcements: {
        Row: {
          author_id: string | null
          content: string
          created_at: string | null
          id: string
          is_active: boolean | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          content: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          content?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "announcements_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      bus_votes: {
        Row: {
          created_at: string | null
          id: string
          route_id: string | null
          status: Database["public"]["Enums"]["vote_status"] | null
          student_id: string | null
          updated_at: string | null
          vote_weight: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          route_id?: string | null
          status?: Database["public"]["Enums"]["vote_status"] | null
          student_id?: string | null
          updated_at?: string | null
          vote_weight?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          route_id?: string | null
          status?: Database["public"]["Enums"]["vote_status"] | null
          student_id?: string | null
          updated_at?: string | null
          vote_weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bus_votes_route_id_fkey"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "routes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bus_votes_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      buses: {
        Row: {
          bus_name: string
          bus_number: string
          capacity: number
          created_at: string | null
          id: string
          image_url: string | null
          updated_at: string | null
        }
        Insert: {
          bus_name: string
          bus_number: string
          capacity: number
          created_at?: string | null
          id?: string
          image_url?: string | null
          updated_at?: string | null
        }
        Update: {
          bus_name?: string
          bus_number?: string
          capacity?: number
          created_at?: string | null
          id?: string
          image_url?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      complaints: {
        Row: {
          bus_id: string | null
          created_at: string | null
          description: string
          id: string
          status: Database["public"]["Enums"]["complaint_status"] | null
          student_id: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          bus_id?: string | null
          created_at?: string | null
          description: string
          id?: string
          status?: Database["public"]["Enums"]["complaint_status"] | null
          student_id?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          bus_id?: string | null
          created_at?: string | null
          description?: string
          id?: string
          status?: Database["public"]["Enums"]["complaint_status"] | null
          student_id?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "complaints_bus_id_fkey"
            columns: ["bus_id"]
            isOneToOne: false
            referencedRelation: "buses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "complaints_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      emergency_alerts: {
        Row: {
          created_at: string | null
          id: string
          is_resolved: boolean | null
          location: Json | null
          message: string | null
          resolved_by: string | null
          student_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_resolved?: boolean | null
          location?: Json | null
          message?: string | null
          resolved_by?: string | null
          student_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_resolved?: boolean | null
          location?: Json | null
          message?: string | null
          resolved_by?: string | null
          student_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "emergency_alerts_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emergency_alerts_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          college_id_url: string | null
          created_at: string | null
          email: string
          full_name: string
          id: string
          is_approved: boolean | null
          is_foreign_student: boolean | null
          phone_number: string
          profile_photo_url: string | null
          region: Database["public"]["Enums"]["campus_region"] | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
          usn: string | null
        }
        Insert: {
          college_id_url?: string | null
          created_at?: string | null
          email: string
          full_name: string
          id: string
          is_approved?: boolean | null
          is_foreign_student?: boolean | null
          phone_number: string
          profile_photo_url?: string | null
          region?: Database["public"]["Enums"]["campus_region"] | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
          usn?: string | null
        }
        Update: {
          college_id_url?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          is_approved?: boolean | null
          is_foreign_student?: boolean | null
          phone_number?: string
          profile_photo_url?: string | null
          region?: Database["public"]["Enums"]["campus_region"] | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
          usn?: string | null
        }
        Relationships: []
      }
      routes: {
        Row: {
          created_at: string | null
          id: string
          name: string
          region: Database["public"]["Enums"]["campus_region"]
          stops: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          region: Database["public"]["Enums"]["campus_region"]
          stops: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          region?: Database["public"]["Enums"]["campus_region"]
          stops?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      schedules: {
        Row: {
          arrival_time: string
          bus_id: string | null
          created_at: string | null
          departure_time: string
          driver_id: string | null
          id: string
          is_active: boolean | null
          route_id: string | null
          updated_at: string | null
        }
        Insert: {
          arrival_time: string
          bus_id?: string | null
          created_at?: string | null
          departure_time: string
          driver_id?: string | null
          id?: string
          is_active?: boolean | null
          route_id?: string | null
          updated_at?: string | null
        }
        Update: {
          arrival_time?: string
          bus_id?: string | null
          created_at?: string | null
          departure_time?: string
          driver_id?: string | null
          id?: string
          is_active?: boolean | null
          route_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "schedules_bus_id_fkey"
            columns: ["bus_id"]
            isOneToOne: false
            referencedRelation: "buses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedules_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedules_route_id_fkey"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "routes"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      campus_region: "hubli" | "dharwad"
      complaint_status: "pending" | "in_review" | "resolved"
      region: "hubli" | "dharwad"
      user_region: "hubli" | "dharwad"
      user_role: "student" | "driver" | "coordinator" | "admin"
      vote_status: "active" | "completed" | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
